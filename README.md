# VotingAppUI
## Introduction
In order to keep this demo project as real as posible i built an Application in a non-monolitic approach, for this we have an **UI** (user interface) and a **Backend**, this application is deplyed using **Docker containers** with docker-compose all of this over **AWS infrastrcutre** deployed using **Ansible** so a the end of the day we have four repositories.
1. **UI:** https://github.com/jpablo1286/VotingAppUI
2. **Backend:** https://github.com/jpablo1286/VotingAppBackend
3. **Docker containers :** https://github.com/jpablo1286/VotingAppDocker
4. **Ansible Playbooks:** https://github.com/jpablo1286/VotingAppAnsible

## Check the working app visiting this link http://votingapp.juanrivera.org/ ##


# UI

For develop this UI i used Angular Material. I builded five components and one service for this.
## Components ##
1. **VotingForm:** Form for sending votes
2. **VotingResults:** Main layout for display results
3. **VotingColor:** Card with Color and Statisitics
4. **VotingPet:** Card with Pet and Statisitics
5. **VotingRow:** Table with votes details
## Services ##
**BackendService:** Implements methods for query the backend api
