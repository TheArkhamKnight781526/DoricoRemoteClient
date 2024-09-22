<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- PROJECT LOGO -->

<br />
<div align="center">
  <a href="https://github.com/TheArkhamKnight781526/DoricoRemoteServer">
    <img src="dorico-logo.svg" alt="Logo" width="222" height="56">
  </a>

<h3 align="center">Dorico Remote (Server)</h3>

  <p align="center">
    Server for Dorico Remote Stream Deck Plugin
    <br />
    ·
    <a href="https://github.com/TheArkhamKnight781526/DoricoRemoteServer/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/TheArkhamKnight781526/DoricoRemoteServer/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#compiling-the-program">Compiling</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

![Dorico Remote StreamDeck Plugin][product-screenshot]

<!-- COMPILING -->

## Compiling the Program

### Prerequisites

You will need to have Node JS installed. Instructions can be found [here.](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)

### Installation

1. First, clone the repository.

2. Secondly, run `npm install` to install all required packages

3. Finally, run `npm run watch` to debug locally, or follow [these](https://docs.elgato.com/sdk/plugins/packaging) instructions to build the plugin/icon pack.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

This plugin is useless without the accompanying server program, which can be found [here](https://github.com/TheArkhamKnight781526/DoricoRemoteServer)

### Changing the Port

By default, the server runs on port 5608 - if you wish to change it, navigate to your home directory, find a folder named `.dorico_remote/` (if it doesn't exist, you can create it), create a file named `.port`, and simply type the port you wish to use. Both the Stream Deck Plugin and Server will use this port upon restarting.

### How Do I Know What Commands To Use?

The server repository contains a full list of all of the commands available in Dorico Pro - if you know roughly what you're looking for, try searching through `command.txt`. Figuring out the required parameters is a little trickier - I recommend going to your Dorico User Application Folder and having a look through the `application.log` file - it contains all the commands that you've run, along with their parameters. So, click on the thing you want to happen, and then copy the accompanying command. Furthermore, for all of the popover commands, the Dorico documentation has a list of all of the available popover entries - simply Google the documentation.

### There are 3 Commands in this Plugin - Which Do I Use?

This plugin at present contains 3 different commands - Command, Toggle Property, and Toggle Slur. The details for each are as follows:

#### Command

A normal Dorico command. There is one required field - the name of the command (see above for details) - and two optional fields, parameter names and values. Each is a comma seperated list - so if you wanted to send the following command:
`NoteInput.CreatePlayingTechnique?Definition=open&UseLocalOverride=0` you would need to input the following information:

| Field                       | Value                            |
| --------------------------- | -------------------------------- |
| Command                     | NoteInput.CreatePlayingTechnique |
| Parameter Names (Optional)  | Definition, UseLocalOverride     |
| Parameter Values (Optional) | open, 0                          |

#### Toggle Slur

No parameters for this one. It simply toggles between sending a start slur command and an end slur command.

Be Warned: This is a very basic toggle. The Dorico API currently has no way to query for whether a slur currently exists, so this button only works by simply flipping between on and off every time you press it. This means if you start a slur with the button, but don't stop it with the button, the next time you press the button to start a slur, you will have to press it twice (to get back to the start slur command).

#### Toggle Parameter

This one is sadly quite complicated. The only use case I have for it so far is toggling the parentheses surrounding an accidental, so I will use this example to illustrate. If you need it to do something else, it may be simpler to just open an issue, and I will help if I can.

This command takes 4 parameters - a property to check, a value to check that property against, a command to send if the property doesn't match (i.e: to turn the property on), and a command if it does match (i.e: to turn the property off). Taking the example of toggling accidental brackets, it works as follows:

| Field          | Value                            |
| -------------- | -------------------------------- |
| Property       | kNoteAccidentalVisibility_v3     |
| Property Value | kRoundBrackets                   |
| On Command     | Edit.ShowAccidentalInParentheses |
| Off Command    | Edit.ShowAccidental              |

That's it! If you have any questions/concerns, feel free to open a GitHub issue!

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/TheArkhamKnight781526/DoricoRemoteServer/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

(Any contributions of icons/profiles are particularly appreciated -just try to stick to the general style of the existing icons.)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Feel free to open an issue if you encounter a bug in the program, or if there is a feature missing that you would like to see added.

(Note: Functionality is currently limited by the Dorico API, so some requests may not be possible)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Dorico.Net](https://github.com/scott-janssens/Dorico.Net)
- [README Template](https://github.com/othneildrew/Best-README-Template/tree/main)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: ./screenshot.png
[services-screenshot]: ./services-screenshot.png
