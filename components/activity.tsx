"use client";

import React from "react";
import { useSectionInView } from "@/lib/hook";

export default function Activity() {
    const { ref } = useSectionInView("Activity");

    return (
        <div ref={ref} id="activity">
            1. Conscientiousness.
People who rank highest in conscientiousness are efficient, well-organized, dependable, and self-sufficient. They prefer to plan things in advance and aim for high achievement. People who rank lower in conscientiousness may view those with this personality trait as stubborn and obsessive.

Fun fact: Studies show marrying someone high in conscientiousness increases your chances of workplace success. A conscientious spouse can boost your productivity and help you achieve the most.

2. Extroversion.
People who rank high in extroversion gain energy from social activity. They're talkative and outgoing and they're comfortable in the spotlight. Others may view them as domineering and attention-seeking.

Fun fact: Be on the lookout for a strong handshake. Studies show men with the strongest handgrips are most likely to rank high in extroversion and least likely to be neurotic. That doesn't hold true for women, however.

3. Agreeableness.
Those who rank high in agreeableness are trustworthy, kind, and affectionate toward others. They're known for their pro-social behavior and they're often committed to volunteer work and altruistic activities. Other people may view them as naïve and overly passive.

Fun fact: Seek a financial investor who is high in agreeableness. Studies show agreeable investors are least likely to lose money from risky trading. Avoid an investor high in openness--that personality is associated with overconfidence that can lead an investor to take excessive risks.

4. Openness to Experience.
People who rate high in openness are known for their broad range of interests and vivid imaginations. They're curious and creative and they usually prefer variety over rigid routines. They're known for their pursuits of self-actualization through intense, euphoric experiences like meditative retreats or living abroad. Others may view them as unpredictable and unfocused.

Fun fact: Openness is the only personality trait that consistently predicts political orientation. Studies show people high in openness are more likely to endorse liberalism and they're also more likely to express their political beliefs.
        </div>
    );
}
