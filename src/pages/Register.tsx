import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import { z } from "zod";

const registrationSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Meno musí obsahovať aspoň 2 znaky" })
    .max(100, { message: "Meno môže obsahovať maximálne 100 znakov" }),
  email: z.string()
    .trim()
    .email({ message: "Zadajte platnú emailovú adresu" })
    .max(255, { message: "Email môže obsahovať maximálne 255 znakov" }),
  phone: z.string()
    .trim()
    .min(9, { message: "Telefónne číslo musí obsahovať aspoň 9 znakov" })
    .max(20, { message: "Telefónne číslo môže obsahovať maximálne 20 znakov" })
    .regex(/^[+0-9\s()-]+$/, { message: "Neplatný formát telefónneho čísla" }),
  company: z.string()
    .trim()
    .max(200, { message: "Názov firmy môže obsahovať maximálne 200 znakov" })
    .optional(),
  message: z.string()
    .trim()
    .max(1000, { message: "Správa môže obsahovať maximálne 1000 znakov" })
    .optional(),
  gdpr: z.boolean().refine(val => val === true, {
    message: "Musíte súhlasiť so spracovaním osobných údajov"
  })
});

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    gdpr: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, gdpr: checked }));
    if (errors.gdpr) {
      setErrors(prev => ({ ...prev, gdpr: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = registrationSchema.parse(formData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Registrácia úspešná!",
        description: "Čoskoro vás budeme kontaktovať.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        gdpr: false
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        
        toast({
          title: "Chyba vo formulári",
          description: "Prosím skontrolujte všetky polia a skúste znova.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Registrácia
              </h1>
              <p className="text-xl text-muted-foreground">
                Vyplňte formulár a my vás budeme kontaktovať
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Meno a priezvisko <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ján Novák"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jan.novak@example.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Telefónne číslo <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+421 123 456 789"
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Názov firmy (voliteľné)</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Vaša firma s.r.o."
                    className={errors.company ? "border-destructive" : ""}
                  />
                  {errors.company && (
                    <p className="text-sm text-destructive">{errors.company}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Správa (voliteľné)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Napište nám o čom máte záujem..."
                    rows={4}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="gdpr"
                    checked={formData.gdpr}
                    onCheckedChange={handleCheckboxChange}
                    className={errors.gdpr ? "border-destructive" : ""}
                  />
                  <Label 
                    htmlFor="gdpr" 
                    className="text-sm font-normal leading-relaxed cursor-pointer"
                  >
                    Súhlasím so spracovaním osobných údajov v súlade s GDPR <span className="text-destructive">*</span>
                  </Label>
                </div>
                {errors.gdpr && (
                  <p className="text-sm text-destructive">{errors.gdpr}</p>
                )}

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Odosielam..." : "Odoslať registráciu"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 HomeCline. Všetky práva vyhradené.</p>
        </div>
      </footer>
    </div>
  );
};

export default Register;
