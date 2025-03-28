import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 items-center mx-auto h-2000 w-full max-w-7xl rounded-xl">
      <div className="w-full flex">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      <div className="w-full columns-sm space-y-4">
        <Card className="w-full break-inside-avoid-column">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>
              Card DescriptionCard DescriptionCard DescriptionCard Description
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="w-full break-inside-avoid-column">
          <CardHeader>
            <CardTitle>Card TitlCard TitlCard Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="w-full break-inside-avoid-column">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>dwdwadwa</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="w-full break-inside-avoid-column">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>
              Card Card DescrDescrD escrDescrDesc rDesc rDescrDes crDescrDes
              cription Description
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Home;
