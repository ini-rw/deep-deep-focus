# Deep Deep focus

A chrome extension that allow to increase your productivity. providing with you the super power to block some websites allowing you to avoid the distraction(for example you might be reading while you wasn't supposed).

## Project structure

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
- [ ] user should be able to save data(export ) and load the data
- [ ] allow creating the reading list

## How run the app locally

- clone the repository
- go in repo and install all dependencies `npm install or yarn`
- add excute permission to the build script `chmod +x build.sh`
- run build script`./build`
- folder extension will be created
- load the folder extension to any chrominium browser as unpacked extension
- congratulation you can use extension :smiley:
