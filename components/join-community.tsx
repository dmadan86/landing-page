import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Users,
  MessageCircle,
  Slack,
  ExternalLink,
  Phone,
  Calendar,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function JoinCommunity() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Users className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">
            Join Our Community
          </h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Be part of a new workforce movement.
        </p>
        <p className="text-lg text-muted-foreground mt-2">
          We're building the largest AI-powered job readiness network — and
          you're invited.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
        <Card className="border-2 hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Connect & Collaborate
            </CardTitle>
            <CardDescription>
              Join our active community channels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Slack className="h-4 w-4" />
                Slack
                <ExternalLink className="h-3 w-3" />
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                Discord
                <ExternalLink className="h-3 w-3" />
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                WhatsApp
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Exclusive Benefits
            </CardTitle>
            <CardDescription>
              Get insider access to opportunities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Partner updates</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Hiring trends</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Private events</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
