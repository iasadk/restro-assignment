'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function LanguageSelector() {
    return (
        <div className="flex items-center gap-4">
            <Select
                defaultValue="en"
                onValueChange={(value) => {
                    localStorage.setItem("lang", value);
                    console.log("Selected language:", value);
                    // i18n.changeLanguage(value)
                }}
            >
                <SelectTrigger className="w-28">
                    <SelectValue placeholder="Language" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
