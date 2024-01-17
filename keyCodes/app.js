const insertCode =document.getElementById("insert")

window.addEventListener("keydown",(event)=>{
insertCode.innerHTML=`
<div class="key">

       ${event.key=== ' ' ? 'space' : event.key}
        <small>Event.Key</small>
    </div>
    <div class="key">
    ${event.keyCode}
        <small>event.KeyCode</small>
    </div>
    <div class="key">
    ${event.code}
        <small>Space</small>
    </div> `
})