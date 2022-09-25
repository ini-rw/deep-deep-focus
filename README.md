# Deep Deep focus

A chrome extension that allows to specificy the allowed sites that you can access. thus allowing you to avoid the distraction

## Infrastructure

The extension is made using react, and typescript
It have four main component but for now this 3 are relevant

- **Background**: this run in the background, it can also help you to fetching the data for the initial load and also accessing the data for the first time use
- **Option**: the main react app that helps user to set sites an remove them
- **Popup**: the pop that user get when click on the extension icon.
- **Config file**: files like manifest.json and rules.json mandatory file that help in setting the chrome extension data

## Roadmap

- [x] allowed sites mode
- [ ] not allowed site mode
- [ ] adding the site schedules

## How run the app

- clone the repository
- install all dependencies
- run command`npm run build`
- folder extension will be created
- load the folder extension to any chrominium browser as unpacked extension
- congratulation you can use extension :smiley:
