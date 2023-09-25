'use client'

import ErrorData from "@/styles/System/Error/Error";

export default function Error({
	error
}: {
	error: Error & {digest?: string}
}) {
	return <ErrorData Type="SystemError" text={error.message}/>
}