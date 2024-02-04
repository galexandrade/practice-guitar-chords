import { Card, Inline, Stack, Text } from '@7shifts/sous-chef';

type Props = {
    chords: string[];
    onChordClick: (chord: string) => void;
    selectedChords: string[];
};

const ChordGroup = ({ chords, onChordClick, selectedChords }: Props) => {
    return (
        <Stack mt={20}>
            <Text as="h3">Basic chords</Text>
            <Inline flex={chords.map(() => 1)}>
                {chords.map((chord) => (
                    <Card
                        onClick={() => onChordClick(chord)}
                        isSelected={selectedChords.includes(chord)}
                        key={chord}
                    >
                        <Text as="insight" alignment="center">
                            {chord}
                        </Text>
                    </Card>
                ))}
            </Inline>
        </Stack>
    );
};

export default ChordGroup;
