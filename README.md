# ApplicationsBot-DiscordJS 
A simple discord JS bot (source code), mainly focused on easy applications without using any sort of database!

# SETUP
## Tidbits:
`Get your bot token using Google/YouTube`

`Go to developer mode in Discord to copy ids`
## Powering the bot:
> First,

Open up `config.json` file and insert your bot token next to "TOKEN".

> Now,

Go to Discord, copy role id of any role you want (basically, users with this role can accept/reject) and insert in "REVIEWER_ID" `(in config.json file)`

> Similarly,

Go to Discord, copy channel id of any channel you want users to apply in (basically, you can have a record and no spam in other channels( and insert in "APPLY_CHANNEL" `(in config.json file)`

> And then,

Go to Discord, copy channel id of any channel you want the bot to send applications (basically, applications will be saved there) and insert in "LOG_CHANNEL" `(in config.json file)`

## Setting up questions:
Open up `questions.json` file and replace `Your question here` with a question for application
You can add/remove questions...

Let's have an example questions:
```json
{
"Question 1": "Your first question",
"Question 2": "Your second question"
}
```
So, you can add a question by inserting new `"Question": "New Question"`
And it should look like this
```json
{
"Question 1": "Your first question",
"Question 2": "Your second question",
"Question 3": "New Question"
}
```
## NOTE: ADD A COMMA `,` AFTER QUESTIONS (expect the last), LIKE IN EXAMPLES

# Features:
> Apply

> Accept

> Reject

> Clean,Simple use

I can make it much more complex by added database and stuff but, we'll go for simple one right now....

# Credits
`Coded by ZariZaryab (Gazarino)`
