import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { PrismaClient } from "@repo/db";
type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};
const prisma = new PrismaClient()
prisma.user
const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <div className="bg-red-500">
      dss
    </div>
  );
}
