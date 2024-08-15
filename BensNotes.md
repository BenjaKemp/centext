

I've tried to stick to the brief as best as possible. Two things that immediately stood out were the lack of an ESLint file and a testing suite. I wouldn’t choose to submit my work without a decent set of tests, but perhaps the testing types you want are something we can discuss at a later date.

Secondly, the ESLint command doesn’t work, so we're relying on tsconfig.json alone. Without ESLint, the codebase might become prone to issues that TypeScript alone cannot catch.

Some of the files I've created might seem like overkill for a small project, but I think it's important to consider scalability. I believe this design scales well, but it could definitely be more concise for what it is right now—just letting you know it was a choice!

I've spent some more time thinking of ways to better filter the applications since this is crucial for real-world data. I can think of one edge case: if the spend filter decreases, it’s not necessary to filter all applications again; we can just refilter the filtered apps. But again, that may be something worth discussing later. It would be important to know the context.

