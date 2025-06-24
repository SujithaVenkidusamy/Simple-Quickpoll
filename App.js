// ==================== FRONTEND: App.js ====================
// Replace frontend/src/App.js with the following:
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    fetchPolls();
  }, []);

  const fetchPolls = () => {
    axios.get('http://localhost:5000/api/polls')
      .then(res => setPolls(res.data))
      .catch(err => console.error('Error fetching polls:', err));
  };

  const handleOptionChange = (value, index) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleCreatePoll = () => {
    const trimmedOptions = options.filter(o => o.trim() !== '');
    if (!question.trim() || trimmedOptions.length < 2) {
      alert('Please provide a question and at least two options.');
      return;
    }

    axios.post('http://localhost:5000/api/polls', {
      question,
      options: trimmedOptions
    })
      .then(() => {
        setQuestion('');
        setOptions(['', '']);
        fetchPolls();
      })
      .catch(err => {
        console.error('Error creating poll:', err);
        alert('Failed to create poll');
      });
  };

  return (
    <div className="App" style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>📊 QuickPoll</h1>
      <input
        placeholder="Poll question"
        value={question}
        onChange={e => setQuestion(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: 10 }}
      />
      {options.map((opt, i) => (
        <input
          key={i}
          placeholder={`Option ${i + 1}`}
          value={opt}
          onChange={e => handleOptionChange(e.target.value, i)}
          style={{ display: 'block', width: '100%', marginBottom: 5 }}
        />
      ))}
      <button onClick={handleAddOption}>Add Option</button>
      <button onClick={handleCreatePoll} style={{ marginLeft: 10 }}>Create Poll</button>

      <h2>📋 Available Polls</h2>
      {polls.map(p => (
        <div key={p.id} style={{ marginTop: 20 }}>
          <h3>{p.question}</h3>
          <ul>
            {p.options.map(o => (
              <li key={o.id}>{o.text} — {o.votes} votes</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;