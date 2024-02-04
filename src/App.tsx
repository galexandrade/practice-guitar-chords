import { useState } from 'react';
import SelectionPage from './pages/SelectionPage';
import PracticePage from './pages/PracticePage';

const App = () => {
    const [selectedChords, setSelectedChords] = useState<string[]>([]);
    const [interval, setInterval] = useState(1);
    const [isPracticing, setIsPracticing] = useState(false);

    if (isPracticing) {
        return (
            <PracticePage
                onStopPractice={() => setIsPracticing(false)}
                selectedChords={selectedChords}
                interval={interval}
            />
        );
    }

    return (
        <SelectionPage
            onStartPractice={() => setIsPracticing(true)}
            selectedChords={selectedChords}
            onChangeChords={setSelectedChords}
            interval={interval}
            onChangeInterval={setInterval}
        />
    );
};

export default App;
