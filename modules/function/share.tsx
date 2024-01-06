'use client'

interface ShareProps {
    title: string;
    text: string;
    link: string;
}

interface ClipboardProps {
    link: string;
}

export function Share({
    title, text, link
}: ShareProps) {
    
    if (navigator.share) {
        navigator.share({
            title: title,
            text: text,
            url: link,
        });
    } else if (navigator.clipboard) {
        navigator.clipboard.writeText(link);
    }
}

export function Clipboard({
    link
}: ClipboardProps) {
    navigator.clipboard.writeText(link);
}