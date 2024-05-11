import { useToast } from "@/components/ui/use-toast";

export function toast(message, description) {
  const { toast } = useToast();
  toast({
    title: message,
    description: description,
  });
}
