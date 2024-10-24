# feeds-viz-task

Hello, interviewee! You'll be working in this small example repo as part of the final interview for a role on the Static Data Infra team, as a full-stack dev.

The idea of this exercise is for us to understand your workflow and how you'd approach problems quite similar to those that you would run into daily a dev on the team.

Though this is a very small, simplistic project, it contains a lot of the technologies and data we touch every day:

- typescript
- pnpm
- react
- next
- zod
- mapbox/mapGL
- the "feeds" data that is used across the company

## Setup

Make sure you have node and corepack/pnpm installed. If you don't, here's the way we would do it on our team. Feel free to use other node version management or installation methods if you prefer, so long as you can run the project locally.

Install `brew`, if not already installed:

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

Follow the last steps provided by the brew installation script.

Install `nodenv`:

`brew install nodenv`

Install the node version (you'll need to be at the root of this repo):

`nodenv install`
`echo 'eval "$(nodenv init -)"' >>~/.zshrc` (this might be bashrc if using bash, zsh is recommended)

At this point, you may need to close and reopen your terminal window.

`corepack enable`
`nodenv rehash`
`pnpm` - select Y to download `pnpm` here.

You should now be able to `pnpm i`.

At this point, add a `MAPBOX_ACCESS_TOKEN` to your local `.env` file (not source-controlled). We can provide you with one as needed.

You should now be able to run the app!

Before starting the exercise, we encourage you to take a look around the repository - it's not at all large! - and familiarize yourself the simple page that is loaded by running `pnpm start` and then opening up `localhost:3000` in the browser of your choice.

## Tasks

During the interview, we'll ask you to complete some tasks in this repo, such as building out functionality, restructuring code, etc. Don't make any changes ahead of time, but otherwise feel free to familiarize yourself with the repository however you see fit.
