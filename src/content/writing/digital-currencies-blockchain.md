---
title: "Digital Currencies, Blockchain, Future of Finance Reaction 2"
date: 2020-11-16
description: Exploring protein folding as a useful proof-of-work mechanism for blockchain
---

*From October 2020// reaction essay for NYU Stern/Law School Digital Currency, Blockchain, Future of Finance course with Drew Hinkes and David Yermack*

Bitcoin has come under fire for a whole host of issues: its energy consumption, the political ideology of many enthusiasts, its volatility, the shady transactions that fueled early usage, the potentially unwarranted hype, and so on. We've picked apart a number of these critiques in class through a much more nuanced prism. One critique that I think has more validity than many of the others is that the Bitcoin proof-of-work task, finding a random number, is pointless-yet-effective. The question raised in class and by other blockchain thinkers is whether we can devise a proof-of-work task that is cryptographically and algorithmically sound while also useful in the broader world. I have one idea I would like to explore -- protein folding as proof-of-work. I'll start with a brief summary of proof-of-work as a verification tool, review the basics of protein folding and why it is important, then analyze whether protein folding could be a useful proof-of-work task for a blockchain. Finally, I'll highlight some folks who seem to be thinking along the same lines already.

## Proof-of-Work Mechanics

Let's start with a quick summary of the mechanics of proof-of-work verification. Every blockchain is, at its simplest, a series of transactions that account for the exchanges of coins between parties. Those transactions need to be verified so that the current state of ownership of coins is accurate; this process of verification-in-chunks is what ultimately creates "blocks" that are "chained" together to form a blockchain. The process of verification itself can take different forms, but the one I'm interested in in this paper, proof-of-work (POW), works as follows:

- All transactions since the previous verification event are grouped together into a block.
- The blockchain in question poses a challenge to all prospective verifiers-- miners-- that is challenging to complete, but easy to verify.
- Miners compete to see who can complete the challenge as quickly as possible.
- Miners who believe they are correct will broadcast their answer for others to check.
- After enough miners (also called "nodes") agree that the answer is correct, the winning miner will receive a reward.

The criteria that is most intriguing to me when thinking of alternative POW designs is that the verification challenge must be difficult to solve but easy to verify. In the Bitcoin blockchain protocol, this involves finding a random number, which when combined with all previous block encryptions, will produce another very-difficult-to-guess specific encryption value, or target. The challenge issuer -- in this case, an algorithm -- can simply announce a target for this round, allow miners to attempt to find a hash value that is lower than the target, and then, after someone has announced that they won, wait for other miners to combine the announced value with the other components of the encryption formula, and verify that it produces the right target value.

Abstracted a level up, in designing a new proof-of-work, we need to issue a challenge that has a solution, likely a single number or small combination of solutions, which can be plugged in to an algorithm to produce a very-unlikely-to-fake value. This lends itself to challenges that have discrete answers with measurable qualities of "correctness." that could be used to plug in to this pseudo-algorithm:

`Encrypt [POW solution + (previous blockchain info)] = Target value`

If we asked people to find one way to arrive at the number 112 using multiplication of more than 2 numbers, we would be able to verify answers -- of which there are many -- and could use timestamps of answer submissions to determine who was correct first. If we issued a challenge that asked people to submit a paragraph about the nature of truth, we would not be able to evaluate the correctness of the output, and would not be able to complete the hashing function. In all of these configurations, we can also ask whether the challenge itself is worthwhile: what is the value of asking people to use their time and computational effort to find random numbers? Is there a better use for this effort than can still maintain a sound cryptographic and incentive design?

## Protein Folding Basics

Let's hold the algorithm design thoughts for a moment and switch gears to protein folding. What is it/why is it important?

Proteins, one of the most important building blocks of life, are composed of a chain of many amino acids. There are 20 unique amino acids found in our bodies, and each one has special characteristics that affect how they interact with each other, and with other molecules. Proteins can be visualized on paper as a chain of linked amino acids, but in 3D space, the electrical charges associated with different amino acids cause the chain to attract and repel itself, leading to a "folding" that gives proteins their unique shapes. The shapes of proteins expose some of those positive or negative charges to passing molecules, which may attract or repel those molecules. This property allows proteins to function in the myriad ways that they do; as enzymes, as membranes, as tissues, and many other important components of life and living systems.

Amino acid chains that make up individual protein molecules can be very large in humans; small ones are chains of 100 amino acids, normal ones can be 1000+. These chains can be a combination of essentially any of the 20 amino acids, leading to large combinatorial sets even for the smaller proteins. Any one of these combinations can take on different shapes when folded. Knowing all of the possible shapes of proteins is important in advancing our understanding of biological systems, but getting to a comprehensive understanding is currently extremely computationally intensive.

The stability of a shape, and the performance qualities of a protein can be measured along a number of dimensions. For the sake of space in this paper, I am going to link to an [example from a protein folding competition website](https://fold.it/portal/node/2010667), where you can see how the challenge is designed. Suffice to say that there is a leaderboard with scores, and a number of factors that roll up in to that final score. Any of these components, from the final score to a lower level performance factor, could be used as the input that leads to a target value.

## Application to Blockchain

The structure for a competition that is difficult to complete but easy to verify already exists, as exhibited by fold-it. Foldit encourages manual folding and is used as an educational tool, but there are also computational versions of Foldit. In fact, there seems to be a project called [FoldingCoin](https://foldingcoin.net/) out of Stanford that attempts to tokenify protein folding, although judging by the current coin price (way less than 1c per coin), it does not seem to have taken off. The promise, however, is real: if we use our manual or computational firepower towards identifying the shape of more and more proteins, we will be able to produce a more robust understanding of the structure of life, and with that knowledge, better medicine and health, better biomaterials for manufacturing (a potential solution to some of our climate change issues), better food production, and more.

I've run out of space for this exercise (I know you all have a lot of these to read!) -- but this seems to be a potential topic/project for the final paper, specifically:

- What are the mechanics for a protein folding-based blockchain, in much more detail
- What efforts have already launched and why have they not succeeded
- What are the potential security vulnerabilities and performance issues in this POW setup
- If successful, what value could this sort of blockchain add to the world
