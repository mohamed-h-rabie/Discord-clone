import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-[72px] z-50  flex-col fixed inset-y-0  ">
        <NavigationSidebar />
      </div>
      <main className="md:pl-[72px] h-full">{children}</main>
    </div>
  );
}
