"use client";
import { ModeToggle } from "@/components/dark-mode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";
import CryptoJS from "crypto-js";
import { AES, enc } from "crypto-js";
import { useState } from "react";
import { encode, decode, loadImage } from "./steganography";
import { useToast } from "@/components/ui/use-toast";

export function Component() {
  const { toast } = useToast();
  const [message, setmessage] = useState("");
  const [password, setpassword] = useState("");
  const [image, setimage] = useState();
  const [enc_txt, setenc_txt] = useState("");
  const [isDecrypt, setisDecrypt] = useState(true);
  const [Enctxt, setEnctxt] = useState('')   
  const encryptMessage = (message, password) => {
    const encrypted = AES.encrypt(message, password).toString(); // Encrypt message with AES
    return encrypted;
  };

  const decryptMessage = (encryptedMessage, password) => {
    try {
      const decrypted = AES.decrypt(encryptedMessage, password).toString(
        enc.Utf8
      ); // Decrypt message with AES
      return decrypted;
    } catch (error) {
      console.error("Decryption error:", error);
    }
  };
  
  const handleDecode = () => {

    const result = decode();
    const res=decryptMessage(result, password);
    setenc_txt(res);
    toast({
      title: "Sucessfully Decrypted",
      description: "The message has been decrypted",
    });
  };
  const handelEncode = () => {
    const res=encryptMessage(message, password)
    console.log("handle encode fun : encrypted message to be put in image",res)
    setEnctxt(res);
    const result = encode(res);
    {
      result
        ? toast({
            title: result,
          })
        : null;
    }
  };
  const handleLoadImage = (e) => {
    const result = loadImage(e);

    {
      result
        ? toast({
            title: result,
          })
        : null;
    }
  };


  return (
    <div className="flex flex-wrap  space-x-5 justify-center items-center h-screen bg-gray-100 dark:bg-gray-800 p-2">
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
            <div className="space-y-4 py-6">
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="text-input"
                >
                  Enter your secret message
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                  id="secret1"
                  placeholder="Enter text"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
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
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
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
                  id="upload-photo"
                  name="upload-photo"
                  accept="image/*"
                  type="file"
                  value={image}
                  onChange={handleLoadImage}
                />
                {image}
              </div>
              <div></div>
              <div className="flex">
                <Button className="w-full" onClick={handelEncode}>
                  Encrypt
                </Button>
              </div>
            </div>
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
                  id="upload-photo"
                  name="upload-photo"
                  accept="image/*"
                  type="file"
                  onChange={handleLoadImage}
                />
              </div>
              <div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
                Result:
                <p className="font-mono text-sm ">{enc_txt}</p>
              </div>
              <div className="flex">
                <Button className="w-full" onClick={handleDecode}>
                  Decrypt
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <canvas className="rounded-md hidden" id="canvas"></canvas>
      </div>
      {isDecrypt ? (
        <div className="p-2 rounded-md  bg-gray-100 dark:bg-gray-800 shadow-md">
          <img
            className="rounded-md"
            id="encoded-image"
            alt="Encoded Image will be displayed here"
          ></img>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
