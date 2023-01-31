import {PartialEmoji} from "./PartialEmoji";
import {APISelectMenuOption} from "discord-api-types/v10";
import Emoji from "./Emoji";

export class SelectMenuOption {
    label: string | null;
    value: string | null;
    description: string | null;
    emoji: PartialEmoji | null;
    default: boolean | null;

    constructor(raw?: APISelectMenuOption | SelectMenuOption) {
        this.label = raw?.label ?? null;
        this.value = raw?.value ?? null;
        this.description = raw?.description ?? null;
        this.emoji = raw?.emoji ? new PartialEmoji(raw.emoji) : null;
        this.default = raw?.default ?? null;
    }

    setLabel(label: string): SelectMenuOption {
        this.label = label;
        return this;
    }

    setValue(value: string): SelectMenuOption {
        this.value = value;
        return this;
    }

    setDescription(desc: string): SelectMenuOption {
        this.description = desc;
        return this;
    }

    setEmoji(emoji: PartialEmoji | Emoji): SelectMenuOption {
        this.emoji = emoji instanceof PartialEmoji ? emoji : new PartialEmoji(emoji);
        return this;
    }

    setDefault(isDefault: boolean): SelectMenuOption {
        this.default = isDefault;
        return this;
    }
}