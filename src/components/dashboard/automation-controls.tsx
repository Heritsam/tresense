"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function AutomationControls() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Automation Controls</CardTitle>
        <CardDescription>Configure your automation settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 sm:space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="confidence-threshold">Confidence Threshold</Label>
            <span className="text-sm font-medium">75%</span>
          </div>
          <Slider
            id="confidence-threshold"
            defaultValue={[75]}
            max={100}
            step={1}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">
            Only auto-reply to comments when AI confidence is above this
            threshold
          </p>
        </div>

        <div className="space-y-2">
          <Label>Reply Templates</Label>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
            <Button variant="outline" className="justify-start">
              <span className="truncate">Standard Responses</span>
            </Button>
            <Button variant="outline" className="justify-start">
              <span className="truncate">Customer Support</span>
            </Button>
            <Button variant="outline" className="justify-start">
              <span className="truncate">Promotional</span>
            </Button>
            <Button variant="outline" className="justify-start text-primary">
              <span className="truncate">+ New Template</span>
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Channel Integrations</Label>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              className="flex items-center gap-2 h-9 px-3 text-xs sm:text-sm sm:h-10 sm:px-4"
            >
              <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Facebook</span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 h-9 px-3 text-xs sm:text-sm sm:h-10 sm:px-4"
            >
              <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Instagram</span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 h-9 px-3 text-xs sm:text-sm sm:h-10 sm:px-4"
            >
              <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Twitter</span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 h-9 px-3 text-xs sm:text-sm sm:h-10 sm:px-4"
            >
              <Youtube className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>YouTube</span>
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>A/B Testing</Label>
          <Tabs defaultValue="disabled">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="disabled">Disabled</TabsTrigger>
              <TabsTrigger value="enabled">Enabled</TabsTrigger>
            </TabsList>
            <TabsContent value="enabled" className="pt-2">
              <p className="text-xs text-muted-foreground">
                A/B testing is enabled. The system will alternate between
                templates to determine the most effective responses.
              </p>
            </TabsContent>
            <TabsContent value="disabled" className="pt-2">
              <p className="text-xs text-muted-foreground">
                A/B testing is disabled. The system will use the default
                template for all responses.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="auto-approve">Auto-approve Responses</Label>
            <p className="text-xs text-muted-foreground">
              Automatically approve responses with high confidence
            </p>
          </div>
          <Switch id="auto-approve" defaultChecked />
        </div>
      </CardContent>
    </Card>
  );
}
