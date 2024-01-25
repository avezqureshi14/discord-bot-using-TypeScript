function extractAnswers(apiResponse: string): string {
    const lines = apiResponse.split('\n');
    const answers: string[] = [];
  
    for (const line of lines) {
      if (line.startsWith('data: {"event": "message"')) {
        const answerMatch = line.match(/"answer": "(.*?)"/);
        if (answerMatch && answerMatch[1]) {
          answers.push(answerMatch[1]);
        }
      }
    }
  
    return answers.join("");
  }
  
  export { extractAnswers };
  