
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


# DOM
In console, type document.URL, document.head. 
Can find anything but just have to put document at the start.

### DOM Methods
* getElementByID
* getElementsByTagName
    * Why not just apply an id to the link and use getElementById to access it directly? getElementById only allows you to access one element, since ids cannot be shared. So, with the above code, you can have many different links with the same class name, and they will all respond to the click event.
* Node Methods
    * node.childNodes
    * node.firstChild
    * node.lastChild
    * node.parentNode
    * node.nextSibling
    * node.previousSibling
* .createElement
* .appendChild
* .removeChild