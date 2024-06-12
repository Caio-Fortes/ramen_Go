export const BrothState = {
    brothSelected: null
};

export const ProteinState = {
    proteinSelected: null
};

export function setBrothSelected(broth) {
    BrothState.brothSelected = broth;
}

export function setProteinSelected(protein) {
    ProteinState.proteinSelected = protein;
}
