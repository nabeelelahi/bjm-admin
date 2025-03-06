import { useState } from "react";
import { Button, Input } from "antd";
import LayoutAdmin from "../component/partial/Layout";
import { QuestionAnswerDto } from "../types";
import QuestionCard from "../component/partial/QuestionAnswer/QuestionCard";
import { useRequest } from "../hooks/useRequest";

const { TextArea } = Input;

export default function QuestionForum() {
    const [questions, setQuestions] = useState<QuestionAnswerDto[]>([
        { _id: '1', user: { name: "John Doe" }, title: "Best Practices for React", description: "What are the best practices for React?", parent: null },
        { _id: '2', user: { name: "Jane Smith" }, title: "Optimizing React Performance", description: "How do you optimize React performance?", parent: null },
        { _id: '3', user: { name: "Alex Brown" }, title: "Understanding React Hooks", description: "What are React hooks and how do they work?", parent: null },
    ]);
    const { data } = useRequest("question-answer", "get", {
        type: 'mount'
    });
    const [selectedQuestion, setSelectedQuestion] = useState<QuestionAnswerDto>(questions[0]);
    const [newAnswer, setNewAnswer] = useState("");

    const handleAddAnswer = () => {
        if (newAnswer.trim()) {
            setSelectedQuestion({
                ...selectedQuestion,
            });
            setNewAnswer("");
        }
    };

    return (
        <LayoutAdmin>
            <div className="flex min-h-screen bg-gray-100">
                <div className="w-1/4 p-4 bg-white shadow-md rounded-lg">
                    <h2 className="text-lg font-bold mb-4">Questions</h2>
                    <ul>
                        {data.map((q) => (
                            <QuestionCard {...q} isActive={q._id === selectedQuestion._id} setSelectedQuestion={setSelectedQuestion} />
                        ))}
                    </ul>
                </div>
                <div className="flex-1 p-6">
                    <div className="p-4 border rounded-lg shadow-md bg-white">
                        <div>
                            <h2 className="font-semibold text-lg text-gray-800 mb-2">{selectedQuestion.user.name}</h2>
                            <p className="text-gray-800">{selectedQuestion.title}</p>
                            <p className="mb-4 text-gray-500">{selectedQuestion.description}</p>
                            <div className="mt-4">
                                <TextArea
                                    value={newAnswer}
                                    onChange={(e) => setNewAnswer(e.target.value)}
                                    placeholder="Write your answer..."
                                    className="w-full mb-2 border rounded p-2"
                                />
                                <Button className="bg-[#0B6990] text-white px-4 py-2 rounded" onClick={handleAddAnswer}>Submit Answer</Button>
                            </div>
                            <div className="mt-4 space-y-2">
                                {/* {selectedQuestion.answers.length > 0 ? (
                                    selectedQuestion.answers.map((answer, index) => (
                                        <div key={index} className="text-sm bg-gray-100 p-3 rounded-md border">
                                            <strong className="text-blue-600">{answer.user.name}:</strong> {answer.description}
                                        </div>
                                    ))
                                ) : ( */}
                                <p className="text-gray-500 text-sm">No answers yet. Be the first to answer!</p>
                                {/* )} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
}
