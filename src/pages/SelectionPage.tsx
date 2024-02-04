import {
    Button,
    IconChevronLeft,
    IconChevronRight,
    IconRepeat,
    Inline,
    Page,
    ProgressBar,
    Stack,
    Text
} from '@7shifts/sous-chef';
import ChordGroup from '../components/ChordGroup';

type Props = {
    onStartPractice: () => void;
    selectedChords: string[];
    onChangeChords: (chords: string[]) => void;
    interval: number;
    onChangeInterval: (interval: number) => void;
};
const SelectionPage = ({
    onStartPractice,
    selectedChords,
    onChangeChords,
    interval,
    onChangeInterval
}: Props) => {
    const basicChords = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const minorChords = ['Am', 'Bm', 'Cm', 'Dm', 'Em', 'Fm', 'Gm'];
    const seventhChords = ['A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7'];

    const handleChordClick = (chord: string) => {
        if (selectedChords.includes(chord)) {
            removeChordSelection(chord);
        } else {
            onChangeChords([...selectedChords, chord]);
        }
    };

    const removeChordSelection = (chord: string) => {
        const newChords = selectedChords.filter((c) => c !== chord);
        onChangeChords(newChords);
    };

    return (
        <Page
            title="Practice guitar chords 🎸"
            subtitle="Select the chords you want to practice and hit play!"
            actions={
                <Button
                    theme="primary"
                    disabled={selectedChords.length === 0}
                    onClick={onStartPractice}
                >
                    <IconRepeat /> Practice selected chords
                </Button>
            }
            size="fullwidth"
        >
            <Stack mt={40}>
                <Stack mt={20}>
                    <Text as="h3">Interval</Text>
                    <Inline flex={[0, 1]}>
                        <Button
                            onClick={() =>
                                interval > 1 && onChangeInterval(interval - 1)
                            }
                            disabled={interval === 1}
                        >
                            <IconChevronLeft />
                        </Button>
                        <Inline flex={[1]} mt={12}>
                            <ProgressBar
                                progress={interval}
                                steps={['5 sec', '10 sec', '15 sec', '20 sec']}
                            />
                        </Inline>
                        <Button
                            onClick={() => onChangeInterval(interval + 1)}
                            disabled={interval === 4}
                        >
                            <IconChevronRight />
                        </Button>
                    </Inline>
                </Stack>
                <ChordGroup
                    chords={basicChords}
                    onChordClick={handleChordClick}
                    selectedChords={selectedChords}
                    title="Basic chords"
                />
                <ChordGroup
                    chords={minorChords}
                    onChordClick={handleChordClick}
                    selectedChords={selectedChords}
                    title="Minor chords"
                />
                <ChordGroup
                    chords={seventhChords}
                    onChordClick={handleChordClick}
                    selectedChords={selectedChords}
                    title="Seventh chords"
                />
            </Stack>
        </Page>
    );
};

export default SelectionPage;
