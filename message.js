const FLIRTY_MAN_COMPLIMENTS = [
    "I love how confident you are; it's so attractive.",
    "You always make me laugh, and I can't get enough of it.",
    "You handle everything with such strength—it's really sexy.",
    "You're so driven, it's kind of a turn-on.",
    "You always look amazing, like, effortlessly handsome.",
    "There's something about you that brings out the best in everyone, especially me.",
    "The way you think and how smart you are—it's seriously impressive.",
    "You have this way of making me feel special every time we talk.",
    "You're such a natural leader; it's really hot.",
    "I feel so calm and safe when I'm around you.",
    "I love how true you are to yourself—it's so attractive.",
    "You're such a great listener, I could talk to you for hours.",
    "You're so resourceful, it's one of the many things I find really sexy about you.",
    "Your creativity is just one more thing that makes you stand out.",
    "Honestly, you're kind of the perfect guy to look up to.",
    "You seem to know exactly what you want, and I really like that.",
    "The way you focus and get things done is seriously sexy.",
    "I love how you're always ready to step up—so confident.",
    "You're sweet and thoughtful, and it makes you even more irresistible.",
    "You're strong and kind at the same time—it's such a sexy combination.",
];

const FLIRTY_WOMAN_COMPLIMENTS = [
    "You have this energy that just draws me in—can’t look away.",
    "Every time I see you, you get more stunning.",
    "Your smile? It’s seriously dangerous for my heart.",
    "You make everything around you look a little brighter.",
    "I can’t stop thinking about how amazing you looked today.",
    "The way you carry yourself is so captivating—it's impossible not to notice.",
    "Your laugh is easily my favorite sound.",
    "You’re not just beautiful; you’re completely unforgettable.",
    "You have this way of making even the simplest things sexy.",
    "Everything you say just makes me want to know more about you.",
    "I don’t know how you do it, but you keep blowing me away every time.",
    "There’s something about you that’s just so irresistible.",
    "You have this confidence that’s really sexy.",
    "I’m always in awe of how you manage to be so beautiful and so smart at the same time.",
    "You have this spark—like you’re the most interesting person in any room.",
    "I love how you can be so effortlessly charming.",
    "You’ve got this perfect mix of sweet and sexy.",
    "I can’t decide what’s more distracting—your beauty or your mind.",
    "There’s something about the way you look at me that drives me crazy.",
    "You make flirting feel too easy; I can’t help but want more of you.",
];

const greetAndComplement= () => {
    if (Math.random() < 0.5) {
        return FLIRTY_MAN_COMPLIMENTS[Math.floor(Math.random() * FLIRTY_MAN_COMPLIMENTS.length)];
    } else {
        return FLIRTY_WOMAN_COMPLIMENTS[Math.floor(Math.random() * FLIRTY_WOMAN_COMPLIMENTS.length)];
    }
}
console.log(greetAndComplement());