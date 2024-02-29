const API_KEY = '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'
const submitButton = document.querySelector('#submit')

async function getMessage() {
    console.log('clicked')
    try{
        await fetch('https://api.openai.com/v1/chat/completions')
    }
    catch {

    }
}

submitButton.addEventListener('click', getMessage)