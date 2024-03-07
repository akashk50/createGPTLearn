const API_KEY = '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'; // Be cautious with API key exposure
const submitButton = document.querySelector('#submit');
const outputText = document.querySelector('#output');
const inputText = document.querySelector('#userInput');
const historyElement = document.querySelector('.history');


async function getMessage() {
    console.log('clicked');
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: inputText.value}],
            max_tokens: 100
        })
    };

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options);
        const data = await response.json(); // Correctly call the json() method
        console.log(data); // Log the parsed data
        outputText.textContent = data.choices[0].message.content
        if (data.choices[0].message.content) {
            const pElement = document.createElement('p')
            pElement.textContent = inputText.value
            historyElement.append(pElement)

         }
    } catch (error) { 
        console.error(error);
    }
}

submitButton.addEventListener('click', getMessage);
