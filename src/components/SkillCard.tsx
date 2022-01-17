import React from 'react';
import { 
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...rest } : SkillCardProps) {
    return (
        <TouchableOpacity
            style={styles.buttonSkill}
            activeOpacity={.7}
            {...rest}
        >
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10
    },
    textSkill: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    }
})