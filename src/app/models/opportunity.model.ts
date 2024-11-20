export interface Opportunity {
    id: string;
    title: string;
    description: string;
    location: string;
    town: string;
    image_path: string
    start_date: string;
    end_date: Date;
    requirements: string;
    org_id: number;
    skillsRequired: String [];
    categories: string [];
    created_at: Date;
    updated_at: Date;
}
