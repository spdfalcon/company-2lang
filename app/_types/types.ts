export interface ButtonProps {
  title?: string;
  bg?: "gradient" | "background" | "";
  type?:
    | "box1"
    | "box2"
    | "box3"
    | "box4"
    | "box5"
    | "box6"
    | "box7"
    | "box8"
    | "box9"; // به دلخواه تعیین کنید
  href: string;
  shadow?: boolean;
}

export interface FeaturesPlanProps {
  count?: number;
  title?: string;
  src?: string;
  width?: number;
  height?: number;
  text?: string;
}
export interface PlanProps {
  title?: string;
}
export interface BriefFeacherProps {
  title?: string;
  src: string;
}
export interface SocialmediaProps {
  title: string;
  bg: string;
iconsm:string
  iconmd:string
}
