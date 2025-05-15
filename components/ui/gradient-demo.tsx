import { GradientText } from "@/components/ui/gradient-text";

export function GradientTextDemo() {
  return (
    <h1 
      className="text-center font-quantico font-bold text-3xl tracking-widest md:text-5xl lg:text-5xl"
      style={{ fontFamily: "var(--font-quantico) !important" }}
    >
       <GradientText>DEVELOPER</GradientText>
    </h1>
  );
}
