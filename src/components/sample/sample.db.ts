class SampleDatabaseOperations {

	public sampleDbFunction(input: string): Promise<string> {
		return new Promise((resolve, reject) => {
			input === 'resolve' ? resolve('SUCCESS') : reject('FAILURE');
		});
	}
}

export const sampleDatabaseOperations: SampleDatabaseOperations = new SampleDatabaseOperations();
