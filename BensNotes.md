i've tried to stick to the brief as best as possible, two things that immediately stuck out was the lack of a eslint file and 
o testing suite - I wouldn't choose to submit my work without a decent set of tests, but perhaps the testing types you want
is something we can discuss at a later date

Secondly, the ESLint command doesn’t work, and so we're relying on tsconfig.json alone. Without ESLint, the codebase might become prone to issues that TypeScript alone cannot catch.

Some of the files i've created are overkill a small project but I thinks its important to think about scalability, I believe that
this design scales well but could defo be more concise for what it is right now, just letting you know it was a choice!

I've spent some more time thinking of ways to better filter the applications since this is crucial in real world date - I can think of one edge case, if spend filter decreases then its not necessary to filter all applications again, we can just refilter the filtered apps

