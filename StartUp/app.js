const API_KEY='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'

async function fetchData() {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo-0125",
            messages: [
                {"role": "user", "content": "Hello! How are you?"}
            ], 
            max_tokens: 7
        })
    })
    const data = await response.json()
    console.log(data)
}

fetchData()

