---
layout: post
title:  "在Forth中实现DOES>，这就是我开始这堆乱七八糟事情的全部原因。"
author: todsacerdoti
description: 文章深入探讨了Forth编程语言中一个特殊的立即执行词DOES>的实现机制。作者首先通过一个示例展示了如何使用CREATE和DOES>来创建“智能数据结构”。接着，文章详细解释了CREATE的工作原理，以及如何使用CREATE和DOES>来创建新的词。作者进一步解释了DOES>的三个时间维度：编译时、定义新词时和运行时。在编译时，DOES>会将它的运行时xt编译到当前词中，并在定义新词时更新新词的xt。在运行时，通过修改新词的xt，DOES>能够确保在执行新创建的词时能够正确地执行紧随其后的代码。文章还讨论了为什么JonesForth没有实现DOES>，并推测这与现代系统对内存可写性和可执行性的限制有关。
categories: [ Hacker News ]
image: https://picsum.photos/seed/1749519399/750/500
tags: [startup]
---

作者: todsacerdoti | 发布日期: 2025-06-10 | 评分: 120 | 评论数: 9

**摘要：**

文章深入探讨了Forth编程语言中一个特殊的立即执行词DOES>的实现机制。作者首先通过一个示例展示了如何使用CREATE和DOES>来创建“智能数据结构”。接着，文章详细解释了CREATE的工作原理，以及如何使用CREATE和DOES>来创建新的词。作者进一步解释了DOES>的三个时间维度：编译时、定义新词时和运行时。在编译时，DOES>会将它的运行时xt编译到当前词中，并在定义新词时更新新词的xt。在运行时，通过修改新词的xt，DOES>能够确保在执行新创建的词时能够正确地执行紧随其后的代码。文章还讨论了为什么JonesForth没有实现DOES>，并推测这与现代系统对内存可写性和可执行性的限制有关。

The issue I had with DOES> isn't that it's hard to use—it's just that I had no idea how one would go about implementing it,
much like Javascript programmers use closures without having to think about how they're implemented
(even if they're aware of closures in the first place).
So,
before going into how it works,
a sample from Starting Forth is in order.

: STAR 42 EMIT ;

: .ROW CR 8 0 DO
    DUP 128 AND IF STAR ELSE SPACE THEN 2*
  LOOP DROP ;

: SHAPE CREATE 8 0 DO C, LOOP
  DOES> DUP 7 + DO I C@ .ROW -1 +LOOP CR ;

HEX 18 18 3C 5A 99 24 24 24 SHAPE MAN

These two words support the example.
The first word, STAR just prints a asterisk
(42 is the ASCII code for the word).
The second word,
.ROW,
takes an 8-bit value and for each bit,
if it's a 1,
prints an asterisk,
otherwise,
it prints a space.
DO LOOP is Forth's for loop by the way.
The next word,
SHAPE is the interesting one.
But first,
we need to discuss CREATE.
This word creates a new entry in the Forth dictionary by reading the next word
(defined as a collection of non-space letters)
in the input as the name.
It then gives the newly created word a default action of pushing the address of the body of the word into the stack.
Going ahead a bit,
the word MAN just after CREATE is run will look like this
(in assembly):

man		fdb	shape	; link to next word
		fdb	.xt - .name
.name		fcc	'man'
.xt		fdb	forth_core_create.runtime
.body

When MAN is run,
the address of .body will be pushed onto the stack.
CREATE is typically used to create “smart data structures”—data structures that know how to do some action.
Now,
getting back to the example,
when SHAPE is run,
the first thing it does is call CREATE to create a new word,
then it compiles 8 values off the top of the stack into the body of the newly created word.
Just prior to DOES>, 
MAN will look like:

man		fdb	shape	; link to next word
		fdb	.xt - .name
.name		fcc	'man'
.xt		fdb	forth_core_create.runtime
.body		fcb	$24
		fcb	$24
		fcb	$24
		fcb	$99
		fcb	$5A
		fcb	$3C
		fcb	$18
		fcb	$18

Now we get to DOES>.
Due to the nature of what it does,
DOES> is an immediate word—that is,
its executing during compilation to do the voodoo that it do.
Um, does.
Somehow,
it needs to modify the newly created word to not only push the address of its body onto the stack,
but execute the code that appears after itself.
So the code to be executed needs to be compiled and stored somewhere,
and somehow MAN
(in this example) needs to run this code.
And this was the problem I had with the word—how does this all work?
Even the well known JonesForth,
implemented as an ITC,
didn't bother with implementing DOES>
(and now that I have implemented DOES>,
I suspect I know why JonesForth didn't implement it).
The runtime portion of CREATE just pushes the address of the body of the word into the stack.
The data bytes following the xt have no meaning in and of themselves
(even as code it's nonsensical).
I did a search and found only one page that describes how to implement DOES>,
but:

it was part three of a series of articles describing how Forth's are implemented;
using terminology no longer used by the ANS Forth standard;
attempting to describe how to implement Forth on several different CPU architectures;
using a few different methods (like ITC, DTC and STC);
and on this page, a wierd side trip through another Forth word ;CODE.

It wasn't an exactly easy source to read,
but between part three and part one,
I was able to puzzle it out
(and it makes much more sense now that I've done it).
Now I can discribe the result using a single architecture
(6809) and a single implementation (ITC).
The trick here is to realize that DOES> has a temporal aspect unlike any other Forth word.
Most immediate words in Forth have two temporal aspects—at the time of compilation,
and later at runtime.
For instance,
IF's compile time aspect is to compile a conditional jump into the word,
and the runtime aspect is to do said conditional jump
(at least,
it does so in my implementation).
But DOES> has three temporal aspects:

: SHAPE CREATE ...a DOES> ( time 1 ) ...b ;
...c SHAPE MAN (time 2 )
MAN (time 3 )

At time 1,
we are compiling a word that creates other words
(so at this point, CREATE is compiled, not run).
The compiler looks up DOES>, 
notices that it's an immediate word and executes it.
DOES> at this point needs to include code to cause SHAPE to stop executing,
then somehow leave … something … behind for time 2,
and somehow compile the rest of the code ...b for later execution.
At time 2,
we're defining a new word.
CREATE has been called and the initialization code for this new word …a has been executed.
At this point,
DOES> needs to modify the new word … somehow … to execute the code that followed it at time 1.
And at time 3,
the word created is run and somehow,
it needs to know where the code to run is located.
But going back to what CREATE and the inialization code left us:

man		fdb	shape	; link to next word
		fdb	.xt - .name
.name		fcc	'man'
.xt		fdb	forth_core_create.runtime
.body		fcb	$24
		fcb	$24
		fcb	$24
		fcb	$99
		fcb	$5A
		fcb	$3C
		fcb	$18
		fcb	$18

What can be done?
The easy answer—DOES> updates the xt of the newly created word at time 2.
Where is this xt created?
At time 1.
And when is it uses?
At time 3.
Here's what happens.
DOES> is an immediate word.
When it runs at time 1,
it compiles into the current word
(in this example, SHAPE)
the xt of its runtime.
So SHAPE will look like this:

shape		fdb	dot_row	; link to next word
		fdb	.xt - .name
.name		fcc	'shape'
.xt		fdb	forth_core_colon.runtime
		fdb	forth_core_create.xt
		fdb	forth_core_literal.runtime_xt
		fdb	8
		fdb	forth_core_literal.runtime_xt
		fdb	0
		fdb	forth_core_do.runtime_xt
.L1		fdb	forth_core_literal.runtime_xt
		fdb	128
		fdb	forth_core_and.xt
		fdb	forth_core_if.runtime_xt
		fdb	.L2
		fdb	dot_row.xt
		fdb	forth_core_ext_again.runtime_xt
		fdb	.L3
.L2		fdb	forth_core_space.xt
.L3		fdb	forth_core_two_star.xt
		fdb	forth_core_loop.runtime_xt
		fdb	.L1
		fdb	forth_core_drop.xt
		fdb	forth_core_does.runtime_xt

(Note:  here you can see that literal numbers have the LITERAL runtime action,
that IF compiles to its runtime action.
There are two Forth words that pretty much do the same thing—AHEAD does an unconditional branch forward,
and AGAIN does an unconditional branch backwards;
they basically both do an unconditional branch,
so I picked one to handle both internally and I picked AGAIN for this.
More on this in a later post.)
To create the new xt that words created by SHAPE will use
(or any word that includes DOES>)
it then lays out a single instruction,
JSR forth_core_create.does_hook
(more on this in a bit).
It then exits,
keeping the compiler “on” so the rest of the code that follows DOES> gets compiled into the word
(SHAPE in this case).
This is all DOES> does (man, that sounds weird) at time 1.
At the end,
SHAPE looks like:

shape		fdb	dot_row	; link to next word
		fdb	.xt - .name
.name		fcc	'shape'
.xt		fdb	forth_core_colon.runtime
		fdb	forth_core_create.xt
		fdb	forth_core_literal.runtime_xt
		fdb	8
		fdb	forth_core_literal.runtime_xt
		fdb	0
		fdb	forth_core_do.runtime_xt
.L1		fdb	forth_core_literal.runtime_xt
		fdb	128
		fdb	forth_core_and.xt
		fdb	forth_core_if.runtime_xt
		fdb	.L2
		fdb	dot_row.xt
		fdb	forth_core_ext_again.runtime_xt
		fdb	.L3
.L2		fdb	forth_core_space.xt
.L3		fdb	forth_core_two_star.xt
		fdb	forth_core_loop.runtime_xt
		fdb	.L1
		fdb	forth_core_drop.xt
		fdb	forth_core_does.runtime_xt

.does		jsr	forth_core_create.does_hook	; !!!

		fdb	forth_core_dupe.xt
		fdb	forth_core_literal.runtime_xt
		fdb	7
		fdb	forth_core_plus.xt
		fdb	forth_core_do.runtime_xt
.L4		fdb	forth_core_i.xt
		fdb	forth_core_c_fetch.xt
		fdb	dot_row.xt
		fdb	forth_core_literal.runtime_xt
		fdb	-1
		fdb	forth_core_ext_plus_loop.runtime_xt
		fdb	.L4
		fdb	forth_core_c_r.xt
		fdb	forth_core_exit.xt

Now we execute SHAPE.
Things go along until we get to forth_core_does.runtime_xt.
At this point,
the Y register is pointing to the JSR forth_core_create.does_hook
(see the previous installment for why this is—but to recap:
the Y register is the Forth IP).
We get the xt of the newly created word
(and yes,
I had to modify CREATE to stash this for later use)
to replace the default xt.
At this point, MAN now looks like:

man		fdb	shape	; link to next word
		fdb	.xt - .name
.name		fcc	'man'
.xt		fdb	shape.does
.body		fcb	$24
		fcb	$24
		fcb	$24
		fcb	$99
		fcb	$5A
		fcb	$3C
		fcb	$18
		fcb	$18

Then the DOES> runtime basically does a Forth return,
ending the execution of SHAPE.
Thus ends the steps that happen at time 2.
When MAN executes,
it executes JSR forth_core_create.does_hook.
This is a small extension to forth_core_create that does the double duty of pushing the address of the body onto the stack,
and setting things up to run the Forth code compiled just after that instruction:

forth_core_create
		fdb	forth_core_c_r
		fdb	.xt - .name
.name		fcc	"CREATE"
.xt		fdb	.body
.body		...		; not important right now

.does_hook	puls	d	; pull return address of the stack
		pshs	y	; push Forth IP onto return stack
		tfr	d,y	; point to DOES> code
.runtime	leax	2,x	; get body from xt
		pshu	x	; push into the stack
		ldx	,y++	; NEXT
		jmp	[,x]

The forth_core_create.does_hook pulls the return address
(from the JSR instruction) from the stack—this contains the Forth code after DOES> that needs to run.
We then push the existing Y register onto the stack,
then set Y to the Forth code to execute.
This leads right into forth_core_create.runtime,
which pushes the body of the word
(in this case, MAN)
onto the stack,
and then jumps into the code following the DOES>.
And at the end of all this,
you get:

MAN
   **   
   **   
  ****  
 * ** * 
*  **  *
  *  *  
  *  *  
  *  *
 OK

I suspect the reason why JonesForth didn't implement DOES> has to do with the direct subroutine call in the middle of a Forth word.
This only works if memory is both writable and exectuable,
and modern systems tend to disallow that.
There might be a way around this,
but I haven't yet bothered to figure it out.
I'm just happy to have figured it out as it is.

Discussions about this entry

**原文链接**: https://boston.conman.org/2025/06/09.1

**Hacker News 讨论：**

文章讨论了Forth编程语言中的`CREATE`和`DOES>`指令及其在实现代码定义和执行时的作用。作者解释了这些指令如何允许用户创建新的词汇，并覆盖它们的默认行为以执行自定义代码。文章还提到了早期Forth的`<BUILDS ... DOES>`结构，以及它在现代微控制器实现中的回归。此外，文章还涉及到Forth的数据结构实现、不同Forth方言的差异以及一些读者对这些概念的看法和经验分享。

