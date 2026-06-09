/* global React */
function useTweaks(defaults) { return [defaults, function () {}]; }
function TweaksPanel() { return null; }
function TweakSection() { return null; }
function TweakRadio() { return null; }
Object.assign(window, { useTweaks, TweaksPanel, TweakSection, TweakRadio });
