"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  value: string[];
  onValueChange: (value: string[]) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(
  undefined
);

interface AccordionProps {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  children: React.ReactNode;
  className?: string;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      type = "single",
      defaultValue,
      value: controlledValue,
      onValueChange,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState<string[]>(
      Array.isArray(defaultValue)
        ? defaultValue
        : defaultValue
        ? [defaultValue]
        : []
    );

    const value = controlledValue
      ? Array.isArray(controlledValue)
        ? controlledValue
        : [controlledValue]
      : internalValue;

    const handleValueChange = React.useCallback(
      (newValue: string[]) => {
        if (!controlledValue) {
          setInternalValue(newValue);
        }
        if (onValueChange) {
          onValueChange(type === "single" ? newValue[0] || "" : newValue);
        }
      },
      [controlledValue, onValueChange, type]
    );

    return (
      <AccordionContext.Provider value={{ value, onValueChange: handleValueChange }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("border-b border-gray-200", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionTrigger must be used within Accordion");

  const itemContext = React.useContext(AccordionItemContext);
  if (!itemContext)
    throw new Error("AccordionTrigger must be used within AccordionItem");

  const isOpen = context.value.includes(itemContext.value);

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "flex w-full items-center justify-between py-6 text-left font-semibold text-gray-900 transition-all hover:text-indigo-600 [&[data-state=open]>svg]:rotate-180",
        className
      )}
      data-state={isOpen ? "open" : "closed"}
      onClick={() => {
        const newValue = isOpen
          ? context.value.filter((v) => v !== itemContext.value)
          : [...context.value, itemContext.value];
        context.onValueChange(newValue);
      }}
      {...props}
    >
      {children}
      <svg
        className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionItemContext = React.createContext<{ value: string } | undefined>(
  undefined
);

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    if (!context) throw new Error("AccordionContent must be used within Accordion");

    const itemContext = React.useContext(AccordionItemContext);
    if (!itemContext)
      throw new Error("AccordionContent must be used within AccordionItem");

    const isOpen = context.value.includes(itemContext.value);

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden text-sm text-gray-600 transition-all duration-200",
          isOpen ? "max-h-[1000px] pb-6 opacity-100" : "max-h-0 opacity-0"
        )}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      >
        <div className={className}>{children}</div>
      </div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";

// Wrapper für AccordionItem um Context zu setzen
const AccordionItemWithContext = React.forwardRef<
  HTMLDivElement,
  AccordionItemProps
>(({ value, children, ...props }, ref) => {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <AccordionItem ref={ref} value={value} {...props}>
        {children}
      </AccordionItem>
    </AccordionItemContext.Provider>
  );
});
AccordionItemWithContext.displayName = "AccordionItem";

export {
  Accordion,
  AccordionItem: AccordionItemWithContext,
  AccordionTrigger,
  AccordionContent,
};

