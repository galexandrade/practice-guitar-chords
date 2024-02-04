import {
    Button,
    Card,
    IconTimes,
    Inline,
    Page,
    ProgressBar,
    Stack
} from '@7shifts/sous-chef';
import { useEffect, useState } from 'react';
import './practicing-page.scss';

const INTERVAL_MAP = [0, 5, 10, 15, 20];

type Props = {
    onStopPractice: () => void;
    selectedChords: string[];
    interval: number;
};

const PracticePage = ({ onStopPractice, selectedChords, interval }: Props) => {
    const [practicingChord, setPracticingChord] = useState(() => {
        return selectedChords[
            Math.floor(Math.random() * selectedChords.length)
        ];
    });
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const intervalEvent = setInterval(() => {
            if (timer === INTERVAL_MAP[interval]) {
                setTimer(0);
                const selectedChordsWithoutCurrentChord = selectedChords.filter(
                    (chord) => chord !== practicingChord
                );
                const newChordIndex: number = Math.floor(
                    Math.random() * selectedChordsWithoutCurrentChord.length
                );
                setPracticingChord(
                    selectedChordsWithoutCurrentChord[newChordIndex]
                );
            } else {
                setTimer(timer + 1);
            }
        }, 1000); // update about every second

        return () => clearInterval(intervalEvent);
    }, [interval, timer, practicingChord, selectedChords]);

    return (
        <Page title="Practicing" size="fullwidth">
            <Stack>
                <Inline flex={[1]} mt={40}>
                    <Card>
                        <p className="practicing-page__chord">
                            {practicingChord}
                        </p>
                    </Card>
                </Inline>
                <Inline flex={[1]} mt={12}>
                    <ProgressBar
                        progress={timer}
                        maxValue={INTERVAL_MAP[interval]}
                    />
                </Inline>
                <Button
                    onClick={onStopPractice}
                    size="full-width"
                    theme="hollow"
                >
                    <IconTimes />
                    Stop practice
                </Button>
            </Stack>
        </Page>
    );
};

export default PracticePage;
