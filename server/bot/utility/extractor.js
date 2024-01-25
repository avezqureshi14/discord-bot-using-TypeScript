"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractAnswers = void 0;
function extractAnswers(apiResponse) {
    var lines = apiResponse.split('\n');
    var answers = [];
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        if (line.startsWith('data: {"event": "message"')) {
            var answerMatch = line.match(/"answer": "(.*?)"/);
            if (answerMatch && answerMatch[1]) {
                answers.push(answerMatch[1]);
            }
        }
    }
    return answers.join("");
}
exports.extractAnswers = extractAnswers;
