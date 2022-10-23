export interface LevelInterface {
	ID: number;
    Level_name: string;
}

export interface MapBedInterface {
	ID: number;
    Bed_ID: number;
    Trigae_ID: number;
}

export interface SymptomInterface {
	ID: number;
    Check_date: Date | null;
	Temperature: string;
	Pressure: number;
	Heart_rate: number;
	Comment: string;
	Medicine: string;
    CheckID: number;
	LevelID: number;
	MapbID: number;
}

export interface UserInterface {
	ID: number;
    User_Name: string;
}