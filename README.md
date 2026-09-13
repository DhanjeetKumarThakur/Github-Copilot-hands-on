# Github-Copilot-hands-on
Let's understand some of the important components of Github Copilot in this repo.

## Level 1. Repo-Wide (.github/copilot-instructions.md)
--> Github Copilot instructions: Add a `copilot-instructions.md` with basic instructions to your repo. 

__What is Github Copilot instructions and why do we need it ?__
> The `copilot-instructions.md` file is a __repository-level configuration file used to provide custom, persistent instructions directly to GitHub Copilot__. Placed inside the `.github/` directory of your project, this file acts as a permanent system prompt. __It tells Copilot exactly how it should behave, what coding standards to follow, and what technical choices to make for that specific codebase.__

__How `copilot-instructions.md` and `.prompt.md` files are different than each other ?__

In GitHub Copilot, both `copilot-instructions.md` and `.prompt.md` files are <mark>**markdown-based configuration tools used to customize AI behavior.**</mark> However, they serve completely different purposes in how they are triggered and applied.

The core difference is that **instructions are "always-on" global rules** automatically injected into every request, while **prompts are "on-demand" templates** that you manually call when needed.

Refer the following file as example of repo-wide custom instruction [copilot-instructions.md](.github/copilot-instructions.md)

## Level 2. Path Specific (.github/instructions/*.instructions.md)
__As repo level instruction file will be injected for every request. So stuffing everything around can make a serious mess__ for example You might have some typescript level instruction which should not be intercepted with API Level instructions. __You see the problem ??__ 

This is exact problem, the path Level instruction file solves. It is located under `.github/instructions/typescript.instructions.md` here it is for typescript level instructions file and there is one more key which is really important part of this files `applyTo` it specifiy which files this instructions should be applied for. 

__Learning__: create specific `*.instructions.md` files as needed and make sure none of it's points is conflicting with the root/repo level instructions file.

Simple way to remember it: <mark>__Put your language rule or framework rule in path specific level__</mark> that is under instructions folder and it always name it in `*.instructions.md` format. 

Refer the following file as example of Path Specific instructions [typescript.instructions.md](.github/instructions/typescript.instructions.md)

## Level 3. Agent the cross-tool (AGENTS.md)
Meet the `AGENTS.md` file think of it as `README` but for AI agents. It's an __open cross tool standard__ meaning it could not only read by __Github Copilot__ but it could also be read by another agents in multi agents eco-system or agentic ai eco system. Just to enlight more there is also `claude.md` and `gemini.md` in such eco system. Copilot CLI looks for such files when working in Agentic Mode.

Here is something very important and a killer feature about this files, the `AGENT.md` file at your repo route is your primary guidance and still applies across the whole project. But if you drop the `AGENT.md` in subfolder then that near one take the presidence for all the files in that folder. So the nearest one wins still doesn't win over the root level instructions file it only wins in that specific sub folder.


> In `AGENTS.md` here we write more explicit sequence of order that needs to done not just the commands but of a explict ordering. 

Refer the following file as example of Root Level Agent [AGENTS.md](AGENTS.md)

Refer the following as Sub folder level Agent README file [AGENTS.md](web/AGENTS.md).

## Level 4. Personal/ local (~/.copilot/copilot-instructions.md)
So far what ever we have seen was for team and within the team but, apart from the team you could have your own preference right, the stuff you want on every project that nobody else needs to inherit. That's personal local CLI file so it will not part of your workspace root folder but instead it would be at the parent folder of your workspace. 

You could add instructions something like
```markdown 
# Personal Preference 
- any time you create a new file, add a header with a comment that sounds like a pirate said it. 
```

Remember __Custom Instructions__ are always __ON__ Standards.  If you got specific repeatable task like structure the new API following..., that's not a custom instrucitons but that's a prompt and it should be written in `.github/prompts/*.prompt.md` file that you can trigger on demand. It's a different tool for different job. 

So Remember --> __Short, concrete and always on__ --> that's the __instructions__ recipe. 

--- 

## Summary:
- __Level 1. Repo-Wide__  the foundation it is were we define the project overview, stack, standards. Do this one First. It will be injected in every request. 
- __Level 2. Path-specific__  this are the surgical rules that will be `appliedTo` specific files. 
- __Level 3. AGENTS.md__ the cross-tool standard + monorepo nearest wins it is like a `README` file for Agents. 
- __Level 4. Personal__ it will be placed under your home directory that will only runs in for local machines and not part of Team peoject. 
