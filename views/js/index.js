(() => {
    document.addEventListener("DOMContentLoaded", () =>{
        const noticeDialog = document.querySelector("#noticeDialog")
        noticeDialog.showModal()
        document.querySelector("#noticeButton").onclick = (event) => {
            event.preventDefault()
            if (document.querySelector("#agree").checked)
                noticeDialog.close()
        }
    })


})()