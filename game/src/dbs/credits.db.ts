import { SpriteT } from 'engine';

export type CreditsBaseMeta = {
    marginBottom?: number
}

export type TextCreditsMeta = CreditsBaseMeta & {
    type: 'text',
    text: string,
    fontSize?: number,
    fontFamily?: string,
    isBold?: boolean
};
export type ImageCreditsMeta = CreditsBaseMeta & {
    type: 'image',
    sprite: SpriteT
};

export type CreditsMeta = TextCreditsMeta | ImageCreditsMeta;

export const credits: CreditsMeta[] = [
    {type: 'text', text: 'Physics Game Final', marginBottom: 120},
    
    {type: 'text', text: 'Developed by Miniwit Studios', marginBottom: 60},
    {type: 'image', sprite: { src: 'branding/miniwit-studios.png', transparent: true }, marginBottom: 120},
    
    {type: 'text', text: 'Game Design', isBold: true, fontSize: 32, marginBottom: 30},
    {type: 'text', text: 'Brandon Slade', marginBottom: 120},
    
    {type: 'text', text: 'Level Design', isBold: true, fontSize: 32, marginBottom: 30},
    {type: 'text', text: 'Brandon Slade', marginBottom: 120},
    
    {type: 'text', text: 'No animals were harmed during the making of this game.', marginBottom: 30},
    {type: 'text', text: 'No humans were harmed during the making of this game.', marginBottom: 30},
    {type: 'text', text: 'No aliens were harmed during the making of this game.', marginBottom: 30},
    {type: 'text', text: 'In general, no sentient beings were harmed during the making of this game.', marginBottom: 30},
    {type: 'text', text: 'Nothing that identifies as an animal, human, alien, or sentient being'},
    {type: 'text', text: 'was harmed during the making of this game.', marginBottom: 120}
];
