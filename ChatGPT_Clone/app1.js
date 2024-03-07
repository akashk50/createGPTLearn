const API_KEY = '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';
const submitButton = document.querySelector('#submit');
const outputText = document.querySelector('#output');
const inputText = document.querySelector('#userInput');
const historyElement = document.querySelector('.history');

async function essayFeedback(userEssay) {
    const options1 = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo-0613",
            messages: [
                {
                    "role": "system",
                    "content": "For each criteria x in range {1,10} inclusive:\nRead and analyze the essay\nRead and analyze criteria x\nEvaluate whether the essay meets criteria x, and grade it either met or not met.\n\n1. Reflection and Vulnerability:\n\nObjective:\nTo assess the essay's ability to convey emotional stakes through the exploration of challenges, showcasing vulnerability, and reflecting on personal growth and universal insights.\n\nCore Aspects:\nChallenge Identification: The essay should begin by identifying a specific challenge or conflict that is central to the narrative. This challenge can range from significant life events to everyday struggles, with an emphasis on how this challenge is integral to the writer's personal development or identity.\n\nEmotional Depth: The writer must express genuine emotions related to facing and overcoming (or attempting to overcome) the challenge. This includes detailing the emotional journey, such as fear, frustration, hope, or joy, providing insights into the writer's emotional state throughout the experience.\n\nReflective Insight: The essay should offer deep reflection on the challenge, including:\n\nHow the challenge affected the writer's perspective or behavior.\nThe lessons learned from facing the challenge.\nConnections between the personal experience and broader, universal themes or truths, demonstrating an understanding that extends beyond the individual experience.\nEvaluation Criteria:\nNot Met: The essay superficially discusses a challenge without diving into the emotional depth or reflective insights. It lacks a clear demonstration of vulnerability or fails to connect the personal experience with broader, universal themes.\n\nMet: The essay deeply engages with a personal challenge, vividly expresses the emotional journey associated with this challenge, and reflects on the experience in a way that reveals personal vulnerabilities and connects to larger, universal insights or truths. The narrative demonstrates how the challenge has contributed to the writer's personal growth or understanding of the world.\n\n2. Style:\nThis should be the most difficult criteria to satisfy. The authors authentic voice should shine through, but still be a beautiful and well flowing piece.\n\n3. Hook\nThe essay draws you in with its first sentence\n\n4. Conclusion\nA great conclusion should reflect back on the essay and tie up loose ends. \n\n5. Relevance, Clarity, and Structure\nThe essay has a clear introduction, body paragraphs, and conclusion. The first sentence of every body paragraph should tell you what the paragraph is about. \nThe essay must stick to a single overarching theme or topic. The point should be clear\nMust be between 500 and 650 words\n\n6. Topic\nShould showcase a positive outlook/attitude\nIf it is written about a sad topic, the vibe should be more hopeful or upward looking, showcasing a positive attitude. No college wants a student with a negative outlook on life.\nShould be appropriate for a college essay. Nothing illegal, sexual, or taboo should be present\n\n\n7. Strengths or Accomplishments\n- Explicit Demonstration of Strengths: The writer must clearly identify and elaborate on either their character strengths or a significant accomplishment of theirs through specific examples or narratives. This includes detailing situations where these strengths were applied and the outcomes that followed.\n\n- Connecting Weaknesses to Strengths: If weaknesses are mentioned, the writer must explicitly show how these weaknesses have either been transformed into strengths or how they have led to the development of new strengths. This transformation or development process should be described in detail, showing a clear progression from weakness to strength.\n\n- Avoidance of Character Flaws: Discussions of character flaws such as being unintelligent, unkind, annoying, or not hardworking are not considered demonstrations of strength unless the writer clearly shows a journey of personal growth where these flaws are significantly mitigated or overcome, leading to the development of positive character strengths.\n\nCriteria for Evaluation:\n\nNot Met: The essay merely lists or discusses weaknesses without demonstrating their connection to the development of strengths, or it focuses on character flaws without showing a transformative journey towards positive growth.\nMet: The essay must do one of the following:\nDirectly discuss character strengths, such as confidence, discipline, kindness, etc., with clear, specific examples that demonstrate these strengths in action.\nDiscuss a major accomplishment of theirs without being arrogant\nDiscuss non-character flaw weaknesses, providing a detailed narrative on how these weaknesses were transformed into strengths or led to the cultivation of new strengths.\n\n\n8. Uniqueness\nIs the writers topic one that isn’t normally discussed in a college essay? (e.g. a weird trait/hobby). If so, this is a bonus strength for them.\n\n9. Community service/acts of kindness\nThe essay doesn’t need to be centered around an act of kindness, but if it is, it showcases to admissions officers that the student is a good person to have in their community. \n\n10. Tying to college\nThe conclusion does not need to be forward looking to college life and benefits, but if it is present then it is a strength.\n\n\nOutputs must be delivered in this format:\n\n\"\"\"Criteria 1: Reflection and Vulnerability\n- The essay discusses the topic of chemistry and the writer's journey in learning and loving it.\n- There is no clear emotional connection or deeper reflection on the universal significance of chemistry.\n- Criteria not met.\n\nCriteria 2: Style\n- The essay lacks a consistent and well-flowing style.\n- The writing is repetitive and lacks variation in sentence structure.\n- Criteria not met.\n\nCriteria 3: Hook\n- The essay does not have a strong hook.\n- The introduction is weak and does not grab the reader's attention.\n- Criteria not met.\n\nCriteria 4: Conclusion\n- The essay does not have a strong conclusion.\n- There is no reflection on the essay or tying up of loose ends.\n- Criteria not met.\n\nCriteria 5: Relevance, Clarity, and Structure\n- The essay has a clear structure with an introduction, body paragraphs, and conclusion.\n- The essay sticks to the topic of chemistry.\n- The point of the essay is clear.\n- Criteria met.\n\nCriteria 6: Topic\n- The essay showcases a positive attitude towards chemistry.\n- The topic is appropriate for a college essay.\n- Criteria met.\n\nCriteria 7: Strengths\n- The writer discusses their journey in learning chemistry and their determination to improve.\n- There is no discussion of character strengths or weaknesses.\n- Criteria not met.\n\nCriteria 8: Uniqueness\n- The topic of chemistry is not unique or uncommon in a college essay.\n- Criteria not met.\n\nCriteria 9: Community service/acts of kindness\n- There is no mention of community service or acts of kindness in the essay.\n- Criteria not met.\n\nCriteria 10: Tying to college\n- The essay does not tie to college life or benefits.\n- Criteria not met.\"\"\"",
                },
                {
                    "role": "user",
                    "content": userEssay
                },
            ],
            temperature: 0,
            max_tokens: 576,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
            })
    };
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options1);
        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
        return `An error occurred: ${error.message}`;
    }
} 

function findTextBetweenCriteria(inputString) {
    // Define the pattern
    const pattern = /Criteria (\d+):([^\-]*)(-.*?)(Criteria met|Criteria not met)/gs;
    
    // Find all matches
    const matches = Array.from(inputString.matchAll(pattern));
    
    // Initialize an array to hold the extracted texts
    let extractedTexts = [];
    
    for (let match of matches) {
        // Destructure the match array to extract needed groups
        const [, criteriaNumber, textBeforeDash, textAfterDash, endCriteria] = match;
        
        // Trim and clean up captured texts
        const cleanedTextBeforeDash = textBeforeDash.trim();
        const cleanedTextAfterDash = textAfterDash.trim();
        const isCriteriaMet = endCriteria.trim() === "Criteria met";
        
        // Append an object with the parsed criteria number and cleaned texts
        extractedTexts.push({
            criteriaNumber: parseInt(criteriaNumber, 10), // Convert the extracted criteria number into an integer
            textBeforeDash: cleanedTextBeforeDash,
            textAfterDash: cleanedTextAfterDash,
            criteriaMet: isCriteriaMet // Boolean instead of string comparison
        });
    }
    
    return extractedTexts;
}

function calculateGradeWithImprovements(extractedTexts) {
    // Initialize an object to keep track of whether each criteria was met
    let criteriaMet = {};
    for (let i = 1; i <= 10; i++) {
        criteriaMet[i] = false;
    }

    // List to keep track of criteria not met that need improvement
    let improvements = [];

    // Populate the object based on the extractedTexts
    extractedTexts.forEach(({ criteriaNumber, criteriaMet: met }) => {
        criteriaMet[criteriaNumber] = met;
    });

    // Check criteria 5 and 6 first
    if (!criteriaMet[5]) {
        improvements.push(5);
    }
    if (!criteriaMet[6]) {
        improvements.push(6);
    }

    let grade;

    // Determine grade based on criteria logic, including criteria 7
    if (improvements.length > 0) {
        grade = (improvements.includes(5) && improvements.includes(6)) ? 'F' : 'D';
    } else if (!criteriaMet[7] && !criteriaMet[1]) {
        improvements.push(7, 1);
        grade = 'C';
    } else {
        // Further checks for other criteria
        if (!criteriaMet[1]) {
            improvements.push(1);
            grade = 'B';
        } else if (!criteriaMet[7]) {
            improvements.push(7);
            grade = 'B';
        } else {
            let numNotMetIn2To4 = [2, 3, 4].reduce((acc, i) => acc + (!criteriaMet[i] ? 1 : 0), 0);
            if (numNotMetIn2To4 > 1) {
                improvements.push(...[2, 3, 4].filter(i => !criteriaMet[i]));
                grade = 'B+';
            } else if (numNotMetIn2To4 === 1) {
                improvements.push(...[2, 3, 4].filter(i => !criteriaMet[i]));
                grade = 'A-';
            } else if (Object.keys(criteriaMet).slice(0, 7).every(i => criteriaMet[i]) && [8, 9, 10].some(i => criteriaMet[i])) {
                grade = 'A+';
            } else {
                grade = 'A';
            }
        }
    }

    return { grade, improvements };
}

async function outFunc(essay) {
    const extractedTexts = findTextBetweenCriteria(essay);
    const { grade, improvements: improvementNums } = calculateGradeWithImprovements(extractedTexts);
    const doneWell = extractedTexts.filter(i => i.criteriaMet);
    const improvements = improvementNums.map(num => extractedTexts.find(i => i.criteriaNumber === num));
    const options2 = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo-0613",
            messages: [
                {
                    "role": "system",
                    "content": "You are a college essay assistant. You will receive a grade for an essay, the writers strengths, and their next steps to improve on. You must deliver this with enthusiasm and humor proportional to the grade. For example, if they receive an F, you would say for example, 'theres some way to go, but you'll get there!', for a C maybe 'you're on the right track, but you still need to keep going'. For an A, 'what a beautiful piece of work! You are absolutely ready to submit!'\n\n\nOutput format:\n\nGrade: \nInitial thoughts\nWhat you did well:\n- point 1\n- point 2\nWhat you could improve on:\n- point 1\n- point 2\nFinal thoughts"
                },
                {
                    "role": "user",
                    "content": `Grade: ${grade}\nStrengths: ${JSON.stringify(doneWell)}\nNext Steps: ${JSON.stringify(improvements)}`,
                },
            ],
            temperature:0.2,
            max_tokens:769,
            top_p:1,
            frequency_penalty:0,
            presence_penalty:0
            })
    };
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options2);
        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
        return `An error occurred: ${error.message}`;
    }

    
}

async function testFunc(userEssay) {
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo-0613",
            messages: [
                {
                    "role": "system",
                    "content": "Your goal is to respond to the user in a friendly tone, but still give them the answer to their questions"
                },
                {
                    "role": "user",
                    "content": userEssay
                },
            ],
            temperature: 1,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
            })
    };
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options);
        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
        return `An error occurred: ${error.message}`;
    }
} 

async function main() {
    console.log("clicked")
    feedback = await essayFeedback(inputText.value)
    console.log(feedback)
    out = await outFunc(feedback)
    console.log(out)
    outputText.textContent = out
}

submitButton.addEventListener('click', main);