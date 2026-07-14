import Link from "next/link"
import type { AnchorHTMLAttributes, ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Skiper 40 Animated Link — React
 * Inspired by and adapted from https://cursor.com/?from=home
 * We respect the original creators. This is an inspired rebuild with our own
 * taste and does not claim any ownership. These animations are not associated
 * with cursor.com; they are independent recreations used to study interaction
 * design.
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.me
 * Twitter: https://x.com/Gur__vi
 */

const CONTACT_LINK_PATTERN = /^(?:mailto|tel):/i
const ABSOLUTE_LINK_PATTERN = /^(?:[a-z][a-z\d+.-]*:|\/\/)/i

type AnimatedLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  children: ReactNode
  href: string
  /** Override protocol-based detection for absolute same-origin URLs. */
  external?: boolean
  /** Show the small external-destination indicator. */
  showExternalIcon?: boolean
}

function secureBlankTargetRel(rel: string | undefined, target: string | undefined) {
  if (target !== "_blank") {
    return rel
  }

  const values = new Set(rel?.split(/\s+/).filter(Boolean))
  values.add("noopener")
  values.add("noreferrer")

  return Array.from(values).join(" ")
}

function AnimatedLink({
  children,
  className,
  external,
  href,
  rel,
  showExternalIcon,
  target,
  ...props
}: AnimatedLinkProps) {
  const isContactLink = CONTACT_LINK_PATTERN.test(href)
  const isExternalLink =
    external ?? (ABSOLUTE_LINK_PATTERN.test(href) && !isContactLink)
  const opensNewTab = target === "_blank"
  const shouldShowExternalIcon = showExternalIcon ?? isExternalLink
  const safeRel = secureBlankTargetRel(rel, target)
  const linkClassName = cn(
    "group/link relative inline-flex items-center gap-1 rounded-sm outline-none",
    "before:pointer-events-none before:absolute before:inset-x-0 before:-bottom-0.5 before:h-px before:origin-right before:scale-x-0 before:bg-current before:transition-transform before:duration-300 before:ease-out",
    "hover:before:origin-left hover:before:scale-x-100 focus-visible:before:origin-left focus-visible:before:scale-x-100",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "motion-reduce:before:transition-none",
    className,
  )
  const content = (
    <>
      {children}
      {shouldShowExternalIcon ? (
        <ArrowUpRight
          aria-hidden="true"
          className="size-[0.85em] shrink-0 opacity-70 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none"
          strokeWidth={1.75}
        />
      ) : null}
      {opensNewTab ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </>
  )

  if (isExternalLink || isContactLink) {
    return (
      <a
        className={linkClassName}
        href={href}
        rel={safeRel}
        target={target}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <Link
      className={linkClassName}
      href={href}
      rel={safeRel}
      target={target}
      {...props}
    >
      {content}
    </Link>
  )
}

export { AnimatedLink, type AnimatedLinkProps }
