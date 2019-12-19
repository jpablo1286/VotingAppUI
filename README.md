# VotingAppUI
## Introduction
In order to keep this demo project as real as posible i built an Application in a non-monolitic approach, for this we have an **UI** (user interface) and a **Backend**, this application is deplyed using **Docker containers** with docker-compose all of this over **AWS infrastrcutre** deployed using **Ansible** so a the end of the day we have four repositories.
**UI:** https://github.com/jpablo1286/VotingAppUI
**Backend:** https://github.com/jpablo1286/VotingAppBackend
**Docker containers :** https://github.com/jpablo1286/VotingAppDocker
**Ansible Playbooks:** https://github.com/jpablo1286/VotingAppAnsible

## Check the working app visiting this link http://votingapp.juanrivera.org/ ##


# UI

For develop this UI i used Angular Material. I builded five components and one service for this.
## Components ##
**VotingForm:** Form for sending votes
**VotingResults:** Main layout for display results
**VotingColor:** Card with Color and Statisitics
**VotingPet:** Card with Pet and Statisitics
**VotingRow:** Table with votes details
## Services ##
**BackendService:** Implements methods for query the backend api
