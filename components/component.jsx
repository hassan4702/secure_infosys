import { ModeToggle } from "@/components/dark-mode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";

export function Component() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-800 p-2">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <Tabs className="w-full max-w-md mx-auto" defaultValue="encrypt">
          <div className="flex space-x-4">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="encrypt">Encrypt</TabsTrigger>
              <TabsTrigger value="decrypt">Decrypt</TabsTrigger>
            </TabsList>
            <ModeToggle />
          </div>
          <TabsContent value="encrypt">
            <form className="space-y-4 py-6">
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="text-input"
                >
                  Enter your secret message
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                  id="text-input"
                  placeholder="Enter text"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="password-input"
                >
                  Enter password
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                  id="password-input"
                  placeholder="Enter password"
                  type="password"
                />
              </div>
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="file-input"
                >
                  File Input
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                  id="file-input"
                  accept="image/*"
                  type="file"
                />
              </div>
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="result"
                >
                  Result
                </label>
                <img
                  alt="Result"
                  className="w-full bg-gray-200 rounded-md"
                  height={200}
                  id="result"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/200",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </div>
              <div className="flex">
                <Button className="w-full"> Encrypt </Button>
              </div>
            </form>
          </TabsContent>
          <TabsContent value="decrypt">
            <div className="space-y-4 py-6">
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="file-input"
                >
                  File Input
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                  id="file-input"
                  accept="image/*"
                  type="file"
                />
              </div>
              <div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
                <p className="font-mono text-sm">Decrypted text goes here...</p>
              </div>
              <div className="flex">
                <Button className="w-full"> Decrypt</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
